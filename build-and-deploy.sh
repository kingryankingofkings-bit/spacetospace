#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Building Docker image for Node.js backend..."
docker build -t game-server:latest ./backend

echo "Applying k8s fleet..."
kubectl apply -f k8s/fleet.yaml

echo "Applying k8s autoscaler..."
kubectl apply -f k8s/autoscaler.yaml

echo "Deployment complete."
