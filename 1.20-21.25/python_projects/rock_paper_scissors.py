import random

def play():
    user = input("Choose one: 'r' for rock, 'p' for paper, 's' for scissors\n")
    computer = random.choice(['r', 'p', 's'])

    if user == computer:
        return 'It\'s a draw'
    
    if is_win(user, computer):
        return 'Congratulations! 🚀'
    
    return 'You Died 🤖'

def is_win(player, opponent):
    # returns true if player wins
    # r > s, s > p, p > r
    if (player == 'r' and opponent == 's') or (player == 's' and opponent == 'p') \
        or (player == 'p' and opponent == 'r'):
        return True
    return False

print(play())