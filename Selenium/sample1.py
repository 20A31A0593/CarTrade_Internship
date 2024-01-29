import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
# create webdriver object
service = webdriver.ChromeService(executable_path="D:\CarTrade Internship\Selenium\chromedriver-win64\chromedriver.exe")
driver = webdriver.Chrome(service=service)
# get google.co.in
driver.get("https://google.co.in")
#driver.get("https://www.python.org")
#assert "Python" in driver.title
#ele=driver.find_element(By.Name,"q")
#ele.clear()
#ele.send_keys("pycon")
#ele.send_keys(Keys.RETURN)e
#assert "No results found." not in driver.page_source
#driver.close()