# Trade_View

# Build the Docker image
cd frontend
docker build -t tradeview-frontend .

# Run the container
docker run -p 80:80 tradeview-frontend