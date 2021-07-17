import java.util.Scanner;

public class p2{
    public static void main (String [] args){
        
        Scanner in = new Scanner (System.in);
          while(in.hasNextLine()){

            String a = in.nextLine();
            if(a.length() > 10){
                System.out.print(a.charAt(0));
                int num = -1;
                for(int i = 1 ; i<a.length(); i++){
                    num ++;
                }
                System.out.print(num); 
                System.out.print(a.charAt(a.length()-1) + "\n"); // + a.charAt(a.length()-1) + "\n");
            }else if(a.matches("[0-9]+")){
                continue;
            } else System.out.println(a);
        }


    }



}