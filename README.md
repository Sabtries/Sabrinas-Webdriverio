
                    SignUp (20 marks)
Test Name: userAC.e2e.js 

---Use the following command to run the test: npx kill-port 4444 && npx wdio wdio.conf.js --spec ./test/specs/userAc.e2e.js
---If first test gives an error change the email by adding or removing a from lzwis@gmail.com before testing again. ex.lzwis@gmil.com

I used two tests to show unhappy paths. The first is the invalid user in userAC.e2e.js. The other was trying to create an ac with an existing email in datasheet.e2e.js. 
                                                
                                                Datasheet
---Use the following command to run the data driven test: npx kill-port 4444 && npx wdio wdio.conf.js --spec ./test/specs/datasheet.e2e.js
---Should there be an error for user (Steve) change the email to wor@jackoz.com in data_sheet.js before running again. 


                    Adding a Product to your Cart (10 marks)
Test Name: cart.e2e.js 

---Use the following command to run the test: npx kill-port 4444 && npx wdio wdio.conf.js --spec ./test/specs/cart.e2e.js


                    Purchasing a Product (10 marks)
Test Name: checkout.e2e.js 

---Use the following command to run the test: npx kill-port 4444 && npx wdio wdio.conf.js --spec ./test/specs/checkout.e2e.js
If there is an error then change the email in line 27 to music@gmil.com then run again.


                    Verify Purchase in Order History (10 marks)
Test Name: history.e2e.js 

---Use the following command to run the test: npx kill-port 4444 && npx wdio wdio.conf.js --spec ./test/specs/history.e2e.js



                            Testing on multiple browsers (10 marks)

    I also ran the tests in Microsoft Edge and Firefox

To install Microsoft Edge enter and run each test as shown above
Comment the chrome info in wdio.conf.js (line 59 and 60) and uncomment the Edge data in line 62 and 53.

Edit the email in userAC.e2e.js to clowis@gmail.com (line 14) save, change the email on line 27 in checkout.e2e.js to piano@ballad.com. Then edit the email in data_sheet.js for Steve Works to wor@jarlz.com. Save then run:   npx kill-port 4444 && npx wdio wdio.conf.js
This will run all tests.



To install Firefox enter and run each test using the comman given about 
Comment the edge data in wdio.conf.js (line 62 and 63) and uncomment the firefox data in line 65 and 66.

Edit the email in userAC.e2e.js to clovxs@gmail.com (line 14) and change the email on line 27 in checkout.e2e.js to homme@garcon.co. Then edit the email in data_sheet.js for Steve Works to wor@jxrlz.com. Save then run:   npx kill-port 4444 && npx wdio wdio.conf.js
This will run all tests.

