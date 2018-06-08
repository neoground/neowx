neowx - the most advanced weewx skin


Installation instructions

1) install the extension

wee_extension --install=/absolute/path/to/current/directory

2) restart weeWX

sudo /etc/init.d/weewx stop
sudo /etc/init.d/weewx start


Manual installation instructions

1) copy files to the weeWX skins directory

cp -rp skins/neowx /home/weewx/skins

2) in the weeWX configuration file, add a report

[StdReport]
    ...
    [[basic]]
        skin = neowx

3) restart weeWX

sudo /etc/init.d/weewx stop
sudo /etc/init.d/weewx start