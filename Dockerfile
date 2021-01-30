FROM gengjiawen/v8-build
COPY *.sh ./
RUN bash ./git-init.sh

WORKDIR /root/v8
RUN git config --local gerrit.host true

RUN useradd -l -u 33333 -G sudo -md /home/gitpod -s /bin/bash -p gitpod gitpod \
    # passwordless sudo for users in the 'sudo' group
    && sed -i.bkp -e 's/%sudo\s\+ALL=(ALL\(:ALL\)\?)\s\+ALL/%sudo ALL=NOPASSWD:ALL/g' /etc/sudoers
