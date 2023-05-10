NOTES
# Webdriverio
selenium standalone service dependency for running in  diff browser
under services: ['selenium-standalone]
-----------
diff ways to select dropdowns
selectbyAttribute('attributename','value')
selectbyVisibleText()
---------------
('xpath').moveTo() => will hover to the element
--------------
to check if there is any popup alert
use function  browser.isAlertOpen()
to accept the alert
use browser.accceptAlert()
------------
browser.getwindowHandles() -> will return the all the window name in the browser

switchtoWindow- deals with browser open by application
switchWindow-browser opened by automation

----------
using IFrame
use keyword => browser.switchToFrame(await $(xpath))
to come out of IFRAME => use browser.switchToFrame(null)

-------
Alure reports used to genertae reports
to install this use command npm install @wdio/allure-reporter --sav-dev
Then have to set config in wdio.conf file -> refer wdio docs
--------
