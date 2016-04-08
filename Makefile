all: deploy-everything

prepare-environment: deps

python-deps:
	pip install -r requirements.txt
js-deps:
	cd thevamp/static && npm install

deps: python-deps js-deps

deploy-everything:
	ansible-playbook --vault-password-file=$(HOME)/.ansible-vault.thevamp -i provisioning/inventory provisioning/site.yml

deploy-backend:
	ansible-playbook --vault-password-file=$(HOME)/.ansible-vault.thevamp -i provisioning/inventory provisioning/site.yml -t backend

deploy-frontend: static
	ansible-playbook --vault-password-file=$(HOME)/.ansible-vault.thevamp -i provisioning/inventory provisioning/site.yml -t static

static: js-deps
	cd thevamp/static && webpack --progress --colors

watch:
	cd thevamp/static && webpack --progress --colors --watch

run:
	PYTHONPATH=$(PYTHONPATH):$(shell pwd) python thevamp/application.py

edit-vault:
	ansible-vault --vault-password-file=~/.ansible-vault.thevamp edit provisioning/thevamp-vault.yml
