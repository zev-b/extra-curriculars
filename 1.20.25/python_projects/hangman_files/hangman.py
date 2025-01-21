import random
from words import words
import string

def get_valid_word(words):
    word = random.choice(words)
    while '-' in word or ' ' in word:
        word = random.choice(words)

    return word.upper()

def hangman():
    word = get_valid_word(words)
    word_letters = set(word)
    alphabet = set(string.ascii_uppercase)
    used_letters = set()

    lives = 6

    while len(word_letters) > 0 and lives > 0:
        print('You have used these letters: ', ' '.join(used_letters))

        word_list = [letter if letter in used_letters else '-' for letter in word]
        print('Current word:', ' '.join(word_list))

        user_letter = input('Guess a letter: ').upper()
        if user_letter in alphabet - used_letters:
            used_letters.add(user_letter)
            if user_letter in word_letters:
                word_letters.remove(user_letter)

            else:
                lives = lives - 1
                print('Letter is not in word.')

        elif user_letter in used_letters:
            print('Nice guess, but you have tried this letter already!')

        else:
            print('That won\'t bring him back...\n Invalid Chararcter Submission')

    if lives == 0:
        print('You died, The word was', word)
    else:
        print('You guesses the word correctly', word, '!!')

# user_input = input('Type something:')
# print(user_input)

hangman()
