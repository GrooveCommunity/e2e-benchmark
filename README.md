# E2E Test Tool Benchmark 

This tool runs a pool of Cypress processes in a Kubernetes cluster along with tools to collect, store and visualize their performance (Vector, Prometheus and Grafana)

## Architecture

![Architecture](docs/architecture.png?raw=true)

## Dependencies

* [Docker](https://docs.docker.com/get-docker/)
* [Helm](https://helm.sh/docs/intro/install/)
* [Kind](https://kind.sigs.k8s.io/)

## Installing

Init kind cluster:
```bash
kind create cluster
```

Inside `cypress` directory:
```bash
docker build . -t cypress-test:latest
kind load docker-image cypress-test:latest
```

Inside `vector` directory:
```bash
docker build . -t cypress-vector:latest
kind load docker-image cypress-vector:latest
```

## Running the benchmark

Edit the file `helm/values.yaml` to suit your benchmark scenario (target URL, number of concurrent Cypress agents etc).

Inside `helm` directory:
```bash
helm upgrade --install cypress-test .
```

## Visualizing benchmark metrics on Grafana

Run on a separate shell:
```bash
kubectl port-forward service/cypress-test-grafana 8080:80
```

Open the URL `http://localhost:8080` in a browser

Log in with user `admin` and password `prom-operator`

Find and open the dashboard called `Cypress`

![Grafana](docs/grafana.png?raw=true)

Available metrics are (per Cypress agent):

* Visited pages per second 
* Total visited pages
* CPU usage 

## Cleaning up

```bash
kind delete cluster
```
