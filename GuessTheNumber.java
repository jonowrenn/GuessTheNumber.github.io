package GuessTheNumber;

import java.util.Scanner;
import java.util.Random;

public class GuessTheNumber {
    public static void main(String[] args) {
        Random rand = new Random();
        int numberToGuess = rand.nextInt(100) + 1; // Generates a number between 1 and 100
        Scanner scanner = new Scanner(System.in);
        int numberOfTries = 0;
        boolean hasGuessedCorrectly = false;

        System.out.println("Guess the number between 1 and 100.");

        while (!hasGuessedCorrectly) {
            System.out.print("Enter your guess: ");
            int userGuess = scanner.nextInt();
            numberOfTries++;

            if (userGuess < 1 || userGuess > 100) {
                System.out.println("Invalid guess. Try again.");
            } else if (userGuess < numberToGuess) {
                System.out.println("Higher, try again.");
            } else if (userGuess > numberToGuess) {
                System.out.println("Lower, try again.");
            } else {
                hasGuessedCorrectly = true;
                System.out.println("Correct, you've guessed the number in " + numberOfTries + " tries!");
            }
        }
        
        scanner.close();
    }
}
