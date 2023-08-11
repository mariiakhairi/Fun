import random

computers_number = random.randint(1,100)
prompt = "What is your guess? "
while True:
    players_guess = input(prompt)
    if computers_number == int(players_guess):
        print("Correct!")
        break
    elif computers_number > int(players_guess):
        print("Too low")
    else:
        print("Too high")


#fun
