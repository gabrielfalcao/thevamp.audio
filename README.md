# thevamp

## Table of contents

* [Infrastructure](#Infrastructure)
* [Backend](#Backend)

## Infrastructure:

### DNS

```
@	    A   	45.55.126.214 3600
mail	MX 37	thevamp.audio   60
```

### Stack

* free tls certs from starcom :P
* nginx
* postfix
* redis
* mysql
* prosody
* restund
* gunicorn

### Deploying

```
ansible-playbook --vault-password-file=$(HOME)/.ansible-vault.thevamp -i provisioning/inventory provisioning/site.yml
```

## Backend

* Python app under `./thevamp`
* Routes:
 * `https://thevamp.audio/login`


## SSL:

```
thevamp.audio
mail.thevamp.audio
files.thevamp.audio
api.wavamanda.la
io.thevamp.audio
```
