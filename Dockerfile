FROM gengjiawen/v8-build
COPY *.sh ./
RUN bash ./git-init.sh

WORKDIR /root/v8
RUN git config --local gerrit.host true

