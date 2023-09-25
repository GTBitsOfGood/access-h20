#!/bin/bash

if [ ! -f "./.env" ]; then
  echo "Secrets not found. Pulling files from Bitwarden..."
  if [[ -z "${BW_PASSWORD}" ]]; then
    echo "Error: BW_PASSWORD envvar is not defined. Please inject BW_PASSWORD into container!"
    exit 1;
  fi

  npm install -g @bitwarden/cli fx
  # get secrets
  bw logout
  export BW_SESSION=$(bw login product@bitsofgood.org ${BW_PASSWORD} --raw);
  bw sync --session $BW_SESSION
  bw get item 54baaf4d-8bff-4ad9-9026-ae36001db984 | fx .notes > ".env"

  echo "Secrets successfully retrieved."
fi

npm run dev
