.PHONY: all clean release

all: clean release

clean:
	rm -rf dist
	rm -rf release

release:
	docker build . -t docker.4pd.io/openrice/xingce:latest
	docker push docker.4pd.io/openrice/xingce:latest
deploy:
	ssh root@43.132.167.131 "cd /root/xingce/;git pull"
