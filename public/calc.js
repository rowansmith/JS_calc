
            var num = [];
            var num2;
            function aFunction(number)
            {           
				console.log(number)
				num.push(number)
                var source = event.target || event.srcElement;
                //source.value stores the value of the key that was pressed
                globalAns = globalAns + source.value;
                document.getElementById('ans_field').value = globalAns;
            }
            
            function addition()
            {
              operand = "add";
              document.getElementById('ans_field').value = 0;
              num1 = globalAns;
              globalAns = "";
            }
            
            function subtraction()
            {
              operand = "subtract"; 
              document.getElementById('ans_field').value = 0;
              num1 = globalAns;
              globalAns = "";
            }
            
            function multiply()
            {
              operand = "multiply"; 
              document.getElementById('ans_field').value = 0
              num1 = globalAns;
              globalAns = "";
            }
            
            function divide()
            {
              operand = "divide"; 
              document.getElementById('ans_field').value = 0
              num1 = globalAns;
              globalAns = "";
            }
            
            function equal()
            {
                if (operand == "add")
                    {
                        //ADD
                        num1 = num1*1;
                        globalAns = globalAns*1;
                        globalAns = num1 + globalAns;
                    }
                if (operand == "subtract")
                    {
                        //SUBTRACT
                        globalAns = num1 - globalAns;
                    }
                    document.getElementById('ans_field').value = globalAns;
                    
                if (operand == "multiply")
                    {
                        //multiply
                        globalAns = num1 * globalAns;
                    }
                    document.getElementById('ans_field').value = globalAns;
                    
                if (operand == "divide")
                    {
                        //divide
                        globalAns = num1 / globalAns;
                    }
                    document.getElementById('ans_field').value = globalAns;
            }
            
            
             function cancel() 
             // Sets the value of globalAns to zero
             {
                   globalAns = "";
                   document.getElementById('ans_field').value = "";         
             }
             
             function plus_minus() 
             // Multiplies the current number by minus 1 to change the current number between negative and positive
             {
                    pn = num1 *= -1;
                    document.getElementById('ans_field').value = pn;
                    globalAns = pn;
             } 
             
             function square_root() 
             // Uses a built in function to work out the square root of the current number 
            {
                    //globalAns = document.getElementById('ans_field').value;
                    //globalAns = (Math.sqrt(globalAns));
                    //document.getElementById('ans_field').value = globalAns; 
                    
                    globalAns = (Math.sqrt(globalAns));
                    document.getElementById('ans_field').value = globalAns;
                    
                    // This line is created so that in each intance-thus you will see it at the end of each function, the answer that the user gets can then be used straight away to do another calculation
            
			
			function clear_e()
             //make sure i have the right value - own code
             {
               //ce = document.getElementById('cc').value.substring(0, document.getElementById('ans_field').value.length - 1);
               ce = document.getElementById('ans_field').value = '';
               globalAns = ce; 
             }
			 
			 
             /**
              * Remove the last number entered
              *          
              * //sydwells code         
                globalAns = document.getElementById('ans_field').value;
                var len =  globalAns.length -1;
                globalAns = globalAns.substring(0, len);
                document.getElementById('ans_field').value = globalAns;   
              */
             
             function backspace()
             //make sure i have the right value - own code
             {
               bkspace = document.getElementById('ans_field').value.substring(0, document.getElementById('ans_field').value.length - 1);
               document.getElementById('ans_field').value = bkspace;
               globalAns = bkspace; 
             }
            

