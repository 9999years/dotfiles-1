#
#   General purpose shell environment portable to all shells
#   by Eliza Weisman
#
source $HOME/.shenv.local

# PATH configuration #########################################################
# prioritize Homebrew bin
export PATH="/usr/local/bin"
# other bin dirs
export PATH="$PATH:/usr/bin:/bin:/usr/sbin:/sbin"
# latex bin
export PATH="$PATH:/usr/texbin"
# latex bin on El Capitan
export PATH="$PATH:/Library/TeX/Distributions/.DefaultTeX/Contents/Programs/texbin"
# # Julia
# export PATH="$PATH:/Applications/Julia-0.3.0.app/Contents/Resources/julia/bin"
# llvm
export PATH="$PATH:/usr/local/opt/llvm/bin/"
# cross-compiled binutils
export PATH="$HOME/opt/cross/bin:$PATH"
# Rust apps installed with cargo
export PATH="$PATH:$HOME/.cargo/bin"
# Rustup aftercargo bin
export PATH="$PATH:$HOME/.rustup/toolchains/stable-x86_64-apple-darwin/bin/:$HOME/.rustup/toolchains/stable-x86_64-apple-darwin/bin/"

export PATH="$PATH:$HOME/opt/bin/"

export PATH="$PATH:/usr/local/bin/rust-os-gdb/bin"
export PATH="$PATH:$HOME/.local/bin:$HOME/.cabal/bin"

# Rust source path for Racer
export RUST_SRC_PATH="$(rustc --print sysroot)/lib/rustlib/src/rust/src"

export PATH="$PATH:$HOME/.scripts"

# Go #########################################################################
export GOPATH="$HOME/Code/go"
export GOROOT="/usr/local/opt/go/libexec"
export PATH="$PATH:$GOPATH/bin"
export PATH="$PATH:$GOROOT/bin"

# ssh
export SSH_KEY_PATH="$HOME/.ssh/id.rsa"
# LeJOS EV3
# export EV3_HOME="/opt/lejos-ev3"

# # RLS
# export DYLD_LIBRARY_PATH=${HOME}/.rustup/toolchains/stable-x86_64-apple-darwin/lib


# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/eliza/Code/google-cloud-sdk/path.zsh.inc' ]; then source '/Users/eliza/Code/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/eliza/Code/google-cloud-sdk/completion.zsh.inc' ]; then source '/Users/eliza/Code/google-cloud-sdk/completion.zsh.inc'; fi

# OpenSSL bits
# export OPENSSL_INCLUDE_DIR=`brew --prefix openssl`/include
# export OPENSSL_LIB_DIR=`brew --prefix openssl`/lib

export KUBE_EDITOR="code -w"