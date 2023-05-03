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