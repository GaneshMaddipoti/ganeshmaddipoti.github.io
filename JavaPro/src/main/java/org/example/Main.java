package org.example;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;
/*
Multi line comment
 */
public class Main {

    enum COFFEE {Mocha, Cappuccino};                //Enumaration
    public static void main(String[] args) throws IOException {
        System.out.println("Hello and welcome!");
        //Variables(data types)
        {
            int x = 23;                                 //Datatype name = value;
            String hello = new String("abc");    //for objects

            //Data Types
            boolean flag = true;                        //1 bit, 0 or 1

            byte b = 127;                               //1 byte, -128 to 127
            short s = 32767;                            //2 bytes, -32,768 to 32,767
            int i = 2147483647;                         //4 bytes, -2,147,483,648 to 2,147,483,647
            long l = 9223372036854775807L;              //8 bytes, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

            float f = 33.99999F;                        //4 bytes, 6 to 7 decimal digits
            double d = 23.999999;                       //8 bytes, 15 decimal digits

            char c = 'g';                               //2 bytes, character/ASCII value

            String string = "This is to represent a string object";

            int[] arr = new int[]{1, 2, 3};             //homogeneous collection of data
        }

        //Operators
        {
            //Arithmetic Operators
            int result = 10 + 20;           //addition, concatenation of strings.
            String str = "abc" + "def";

            int result1 = 10 - 20;          //subtraction
            int result2 = 10 * 20;          //multiplication
            int result3 = 10 / 20;          //division
            int result4 = 10 % 20;          //modulus gives the reminder

            //Comparison Operators
            boolean res = 10 > 20;          //Greater than ?
            boolean res1 = 10 < 20;         //less than ?
            boolean res2 = 10 >= 20;        //Greater than or equal to ?
            boolean res3 = 10 <= 20;        //less than or equal to ?
            boolean res4 = 10 == 20;        //equal to ?
            boolean res5 = 10 != 20;        //not equal to ?

            //Bitwise Logical Operators
            boolean resp = true & true;    //and
            boolean resp1 = true | false;   //or
            boolean resp2 = true ^ false;   //exclusive or (only one of them is true)

            //Logical Operators
            boolean resu = true && true;    //compute both when left is true
            boolean resu1 = true || false;  //don't compute on right if left is true

            boolean result12 = !false;      //negation

            int result11 = (true) ? 23 : 32; //ternary operator
        }

        //Constructs
        {
            //Sequence
            int i=0;
            i = i+1;

            //Selective or conditional
            if(i > 0) {
                System.out.println(true);
            } else {
                System.out.println(false);
            }

            //Iterative
            for(int p=0; p< 100; p++) {
                System.out.println(p);
            }
            while(true) {
                System.out.println(true);
                break;
            }
            do{
                System.out.println(true);
            } while (i < 99);
        }

        //Collections, Objects
        {
            //Wrapper classes
            Integer i; Float f;                             //wrappers for all primitives

            List<String> sample = new ArrayList<>();        //indexed
            Set<String> sample1 = new HashSet<>();          //uniqueness
            Map<String, String> sample2 = new HashMap<>();  //key, value pairs

            class Sample {                                  //Object, heterogeneous data,
                Integer id;                                 //properties
                String name;
                public void print() {                       //behavior
                    System.out.println(id + "" + name);
                }
            }
            Sample sample3 = new Sample();
            System.out.println(sample3.name);
        }

        //Features
        {
            try{                                        //Exception Handling
                int i = 99/0;
            } catch(Exception e) {
                e.printStackTrace();
            }

            Runnable runnable = new Runnable() {        //multi-threading
                @Override
                public void run() {
                    System.out.println(true);
                }
            };
            Thread thread = new Thread(runnable);
            thread.start();

            FileReader fileReader = new FileReader(new File(""));               //File IO API
            fileReader.read();
        }

        //Paradigms
        {
            //OOP, inheritance, polymorphism, abstraction, encapsulation

            //functional programming
            List<String> list = new ArrayList<>();
            list.stream().filter(x -> x.contains("a")).collect(Collectors.toList());
        }

    }
}