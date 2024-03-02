Simple pipeline with Github Actions and Watchtower(containrrr/watchtower)

On push to this repository:
- GitHub Actions logins to Docker Hub
- Builds and pushes the Image to pitrak13/test
- Watchtower scans for changes in pitrak13/test
- Starts a new container with the updated image

Access with http://localhost:1234
