all: clean release deploy

run:
	cargo run

release:
	cargo build --release --target x86_64-unknown-linux-musl
	docker build -t cat:release1 .

clean:
	rm -rf target

###

deploy: minikube helm-deploy

minikube:
	minikube start
	eval $(minikube docker-env)

helm-deploy:
	helm upgrade --install cat ./helm -f ./helm/values.yaml --namespace cat --create-namespace
