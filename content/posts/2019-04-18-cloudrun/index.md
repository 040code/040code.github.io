---
slug:       "2019/04/18/cloudrun"
title:      "Cloud Run"
subtitle:   "Bringing serverless to containers"
date:       2019-04-18
cover:      ./skybar-nh.jpg
coverDescription: "VANE Skybar"
coverLink:   "https://goo.gl/maps/Y8UyKjQ2TtBT9Z5K8"
asciinema:   true
imageFb:    ./2019-04-18-cloudrun-fb.png
imageTw:    ./2019-04-18-cloudrun-tw.png
type:        post
tags: 
  - cloud
  - google
  - docker
authors:
  - niek
---

## Introduction
Last week at the [Google Next](https://cloud.withgoogle.com/next/sf/) in San Francisco, Google announced [Cloud Run](https://cloud.google.com/run/). A new platform to enable developers without any infrastructure to run Docker containers on Google Cloud.

> Cloud Run is a managed compute platform that enables you to run stateless containers that are invocable via HTTP requests. Cloud Run is serverless: it abstracts away all infrastructure management, so you can focus on what matters most — building great applications. It is built from [Knative](https://github.com/knative/), letting you choose to run your containers either fully managed with Cloud Run, or in your Google Kubernetes Engine cluster with Cloud Run on GKE.


<a href="#">
    <img src="./next.jpg"
    alt="Next">
</a>

Time the see how this new feature on the Google Platform really works. There are two ways to use Cloud Run. You can choose to run the container serverless, which means you do not have to create any infrastructure. The other option is deploy the container via the Cloud Run to a GKE cluster. From developers perspective there is no difference, the developer can still use the same Cloud Run API.

Lets quickly compare Cloud Run to some other option to run an application sereverless in the cloud. For example you can use [Now](https://zeit.co/now) from Zeit to quickly run a serverless application build in many languages, some major are Node, Rust, Static, Python, Go and NextJS. The free tier get you started quickly. In the paid tier you pay for traffic and invocations. [Fargate](https://aws.amazon.com/fargate/) the the AWS approach to enable serverless Docker containers. But in Fargate you container is always running and you pay per second for CPU and memory. Read [here](https://040code.github.io/2018/01/30/fargate_with_terraform/) more about deploying to Fargate.

## Deploy the 040 blog to Cloud Run

Why not see if we can publish this blog to Cloud Run. Starting is quit simple, just follow the Google documentation. Go to the Google Cloud console and navigate to Cloud Run. You will see here that deploying a container requires two steps. First publish the Docker image to the Docker registry in your Google project. Next deploy the docker image to Cloud Run.

### Prepare your image

On the Cloud Run create service page is clearly mentioned that the containers needs support injection of a port that listen for HTTP traffic via the environment variable `PORT`. This is for example easy to support via the Spring Boot framework. But for the blog we allready have an [NGINX](https://www.nginx.com/) container which not support injection of the port.

The first step will be to enable port injection to our blog runtime container. Which can be done by starting the container via a wrapper script which update the NGNIX configuration. We define a simple server configuration in which we can replace the `NGNIX_PORT` environment variable via [envsubst](https://www.gnu.org/software/gettext/manual/html_node/envsubst-Invocation.html).

```nginx
server {
    listen       ${NGNIX_PORT};
    server_name  localhost;
...
}
```

Next we create a simple `bash` script to update the `PORT` at container start. If no port is set, we apply use the default port `80`.

```bash
#!/bin/bash

export NGNIX_PORT=${PORT:=80}
envsubst < /etc/nginx/conf.d/mysite.template > /etc/nginx/conf.d/default.conf \
  && exec nginx -g 'daemon off;'

```

Finally we update the `Dockerfile` to add the new assets and ensure the `start.sh` script is invoked at container start.

```Docker
FROM jekyll/jekyll:3.8.3 AS build

... OMITTED ...

FROM nginx:1.15.3
COPY --from=build /build/_site /usr/share/nginx/html

### copy wrappers and configuration template
COPY nginx/default.conf /etc/nginx/conf.d/mysite.template
COPY nginx/start.sh /usr/bin

CMD ["start.sh"]
```

This was the hard part, our image is ready. You can test your image locally. For example on port `8081`
```
Docker build -t blog .
Docker run -e PORT=8080 -p 8081:8080 blog
```

### Publish the image to Google Cloud

You can publish the Docker image to the `gcr.io` registry by building locally and push the Docker image. Or by using Google Cloud Build to build the container. We use the power of the cloud and let Goolge build the image.

```gcloud builds submit --tag gcr.io/<project-id>/blog```


<asciinema-player src="/2019/04/18/cloudrun/build.json"
  cols="180" rows="15" autoplay="true" loop="true" speed="2.5">
</asciinema-player>


This will build the Docker image in Google's cloud build and push it to the registry.

### Deploy the blog

Finally we have to deploy the service via cloud run. You can do this via the web interface, or via the cli.

<a href="#">
    <img src="./cloudrun.png"
    alt="Model">
</a>

In the web interface it is straightforward to deploy to Cloud Run. In the cli it is not hard bu you need te be aware that cloud run is beta which requires to install the beta components.
```
gcloud components install beta
```
Next you specify the same properties as you should do via the web interface. Currently Cloud Run is only available in the region `us-central1`. Since we run a public site we allow unauthenticated traffic.

```
gcloud beta run deploy blog \
  --image gcr.io/<project-id>/blog:latest \
  --region us-central1 --allow-unauthenticated
```

<asciinema-player src="/2019/04/18/cloudrun/deploy.json"
  cols="180" rows="15" autoplay="true" loop="true" speed="2.5">
</asciinema-player>

## Some final thoughts

The first impression is that Cloud Run is quit easy to set up. Good to mention is that is based on the Open Source project [Knative](https://github.com/knative/). At the moment the feature is in beta and there is no support in other regions.

In this post we show just the basics of CLoud Run. It is really super easy to deploy you docker containers to the cloud for low costs. Could be handy for example to review branches. But there is a lot more, containers can be protected and only accept authenticated traffic. Furthermore with integration to Cloud Build it is easy to setup a CI/CD pipeline for [GitHub](https://github.com), [Bitbucket](https://bitbucket.org) and Cloud Source Repository. With [GitLab CI](https://gitlab.com) setting up a pipeline for Cloud Run is almost a no brainer. And for deployment GitLab already supports Knative to deploy to a Kubernetes cluster.

