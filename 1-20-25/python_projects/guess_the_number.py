import random


def you_guess(x):
    random_number = random.randint(1, x)
    guess = 0
    while guess != random_number:
        guess = int(input(f'Guess a number between 1 and {x}: '))
        if guess < random_number:
            print(f'Sorry, try again. {guess} is too LOW.')
        elif guess > random_number:
            print(f'Sorry, try again, {guess} is too HIGH')

    print(f'Congrats, you have guessed the number {random_number} correctly!')

def computer_guess(x):
    low = 1
    high = x
    feedback= ''
    while feedback != 'c':
        if low != high:
            guess = random.randint(low, high)
        else: 
            guess = low
        feedback = input(f'Is {guess} too high (H), too low (L), or correct (C)?').lower()
        if feedback == 'h':
            high = guess - 1
        elif feedback == 'l':
            low = guess + 1

    print(f'The computer has guessed your number, {guess}, correctly!')



# you_guess(10000)


# computer_guess(10000)