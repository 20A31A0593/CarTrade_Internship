import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
# create webdriver object
options=webdriver.ChromeOptions()
options.add_experimental_option("detach",True)

service = webdriver.ChromeService(executable_path="D:\CarTrade Internship\Selenium\chromedriver-win64\chromedriver.exe")
driver = webdriver.Chrome(service=service,options=options)
# get google.co.in
driver.get("https://google.co.in")