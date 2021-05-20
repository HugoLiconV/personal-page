---
template: Note
path: /notes/how-to-setup-ubuntu
date: 2020-11-23T01:54:03.921Z
title: How to setup Ubuntu for software development
published: true
metaDescription: How to setup Ubuntu for software development
---

Programs:

- Slack
- VSCode
- Chrome
- Glimpse
- Terminator
- Gnome Tweaks
- Pling Store for themes
- Zoom
- App Image launcher

## Terminator

In Ubuntu, open terminal and write the following commands:

Add Terminator Repository:

```bash
sudo add-apt-repository ppa:gnome-terminator
```

Update sources.list

```bash
sudo apt-get update
```

Install Terminator

```bash
sudo apt-get install terminator
```

## Gnome Tweaks

In Ubuntu, open terminal and write the following commands:

Make sure that we have the universe repository enabled on our Ubuntu system

```bash
sudo add-apt-repository universe'
```

Install Tweak Tool

```bash
sudo apt install gnome-tweak-tool
```

Install browser extension
[Integración con GNOME Shell - Chrome Web Store](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep?hl=es)

### Extensions

- Alternatetab
- Always zoom workspaces
- Clipboard indicator
- Dash to dock
- Dynamic panel transparency
- Native window placement
- Openweather
- User themes
- System monitor:
  You need to install these dependencies and then log out and log in:

  ```bash
     sudo apt-get install gir1.2-gtop-2.0 gir1.2-clutter-1.0 gir1.2-clutter-gst-3.0 gir1.2-gtkclutter-1.0
  ```

### Swap Left Alt with Left Ctrl

**This is useful when you are a Mac user.**

Go to Tweaks > keyboard and Mouse > Additional Layout Options > Ctrl position > Swap Left Alt with Left Ctrl

## AppImageLauncher

1. Add Repository
   `sudo add-apt-repository ppa:appimagelauncher-team/stable`
2. update packages
   `sudo apt-get update`
3. install appimagelauncher
   `sudo apt-get install appimagelauncher`

## Pling Store

Go to [pling.com](pling.com) and download AppImage, install it using AppImageLauncher
and finally, create `.themes` folder in home
Themes:

- Orchis
- Ant Themes
- Dracula.tar.xz
- Ant-alt-style.tar
- Ant-standard-buttons.tar
- McOS-Shell-themes
- McOS-Transparent
- McOS-CTLina-Gnome
- mc-OS-CTLina-Gnome-Dark
- WhiteSur-dark
- WhiteSur-light
- WhiteSur Icons

## Slack

### Slack Theme

This will set a Dracula theme on Slack
Preferences > Themes > Create custom theme
`#19171D,#121016,#1164A3,#FFFFFF,#27242C,#D1D2D3,#2BAC76,#CD2553,#121016,#D1D2D3`

## Git

```bash
sudo apt install git-all
```

## ZSH

```bash
sudo apt install zsh
```

## Oh My ZSH

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## GitHub

1. Go to `~/.ssh` folder

   ```bash
   cd ~/.ssh
   ```

2. Generate key

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

3. Start the ssh-agent in the background

   ```bash
   eval "$(ssh-agent -s)"
   ```

4. Add your SSH private key to the ssh-agent

   ```bash
   ssh-add ~/.ssh/id_rsa
   ```

## tmux

`sudo apt install tmux`

## Install fonts

### Nerd fonts

Download [Droid Sans Mono](https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/DroidSansMono/complete/Droid%20Sans%20Mono%20Nerd%20Font%20Complete%20Mono.otf)

### Fira Code

Go to [Fira Code Github](https://www.github.com/tonsky/FiraCode) and follow instructions

## Dracula Theme

1. Install using Git
   If you are a git user, you can install the theme and keep up to date by cloning the repo:

   ```bash
   git clone https://github.com/dracula/zsh.git
   ```

   And creating a symbolic link to [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh/) ’s theme folder:

   ```bash
   ln -s ~/$DRACULA_THEME/dracula.zsh-theme ~/$OH_MY_ZSH/themes/dracula.zsh-theme
   ```

## zsh-autosuggestions

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

## Dotfiles

1. Go to home

   ```bash
   cd ~
   ```

2. Install dotfiles

   ```bash
   git clone git@github.com:HugoLiconV/dotfiles.git
   ```

### z.sh config

```bash
ln -sv ~/dotfiles/z.sh ~
```

### Terminator config

```bash
ln -sv ~/dotfiles/.config/terminator/config ~/.config/terminator
```

### Vim config

```bash
ln -sv ~/dotfiles/.vimrc ~
```

### Bash config

```bash
ln -sv ~/dotfiles/.bashrc ~
```

### tmux config

```bash
ln -sv ~/dotfiles/.tmux.conf ~
```

### Oh my ZSH config

```bash
ln -sv ~/dotfiles/.zshrc ~
ln -sv ~/dotfiles/.p10k.zsh ~
```

## NVM & Node

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

Restart the terminal

### Install Node.js

```bash
nvm install stable
nvm use stable
```

### Install yarn

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
# Update package list
sudo apt update
```

The command above will also install [Node.js](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/) . If you installed Node trough nvm, skip the Node.js installation with:

```bash
sudo apt install —no-install-recommends yarn
```
