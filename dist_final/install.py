# installer for the 'basic' skin
# Copyright 2014 Matthew Wall

from setup import ExtensionInstaller

def loader():
    return BasicInstaller()

class BasicInstaller(ExtensionInstaller):
    def __init__(self):
        super(BasicInstaller, self).__init__(
            version="1.0",
            name='neowx',
            description='The most advanced weewx skin.',
            author="Sven Reifschneider",
            author_email="sven@neoground.com",
            config={
                'StdReport': {
                    'StandardReport': {
                        'skin':'neowx'
                    }
                }
            },
            files=[('skins/neowx',
                    ['skins/neowx/archive.html.tmpl',
                    'skins/neowx/index.html.tmpl',
                    'skins/neowx/main.min.js',
                    'skins/neowx/manifest.json',
                    'skins/neowx/maps.html.tmpl',
                    'skins/neowx/month.html.tmpl',
                    'skins/neowx/rss.xml.tmpl',
                    'skins/neowx/skin.conf',
                    'skins/neowx/style.css',
                    'skins/neowx/week.html.tmpl',
                    'skins/neowx/year.html.tmpl',
                    'skins/neowx/img/favicon.png',
                    'skins/neowx/img/touch-icon-ipad.png',
                    'skins/neowx/img/touch-icon-iphone-retina.png',
                    'skins/neowx/img/launcher/launcher-icon-0-75x.png',
                    'skins/neowx/img/launcher/launcher-icon-1-5x.png',
                    'skins/neowx/img/launcher/launcher-icon-1x.png',
                    'skins/neowx/img/launcher/launcher-icon-2x.png',
                    'skins/neowx/img/launcher/launcher-icon-3x.png',
                    'skins/neowx/img/launcher/launcher-icon-4x.png',
                    'skins/neowx/NOAA/NOAA-YYYY.txt.tmpl',
                    'skins/neowx/NOAA/NOAA-YYYY-MM.txt.tmpl',
                    'skins/neowx/weather-icons/css/weather-icons.css',
                    'skins/neowx/weather-icons/css/weather-icons.min.css',
                    'skins/neowx/weather-icons/css/weather-icons-wind.css',
                    'skins/neowx/weather-icons/css/weather-icons-wind.min.css',
                    'skins/neowx/weather-icons/font/weathericons-regular-webfont.eot',
                    'skins/neowx/weather-icons/font/weathericons-regular-webfont.svg',
                    'skins/neowx/weather-icons/font/weathericons-regular-webfont.ttf',
                    'skins/neowx/weather-icons/font/weathericons-regular-webfont.woff',
                    'skins/neowx/weather-icons/font/weathericons-regular-webfont.woff2']),
            ]
            )
