#!/bin/bash

# Wait until database container is deployed
until nc -z -v -w30 $DATABASE_HOST 5432  > /dev/null 2>&1
do
  echo "Waiting for database connection..."
  # wait for 2 seconds before check again
  sleep 2
done

# Check if database is created, migrated and seeded
node extras/docker/config_database.js

npm start
