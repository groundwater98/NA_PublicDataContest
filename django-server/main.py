from bard import Human, Economy, Environment, Labor, Traffic, Society

print("""법률 카테고리를 선택하세요.
      1. 인권 
      2. 환경
      3. 노동
      4. 경제
      5. 사회
      6. 교통
      """)

user_choice = int(input("번호 입력: "))

if user_choice == 1:
    print('인권을 선택하셨습니다.')
    user_input = input("Prompt: ")
    response = Human(user_situation=user_input)
    print("response :\n {}".format(response))

elif user_choice == 2:
    print('환경을 선택하셨습니다.')
    user_input = input("Prompt: ")
    response = Environment(user_situation=user_input)
    print("response :\n {}".format(response))

elif user_choice == 3:
    print('노동을 선택하셨습니다.')
    user_input = input("Prompt: ")
    response = Labor(user_situation=user_input)
    print("response :\n {}".format(response))

elif user_choice == 4:
    print('경제을 선택하셨습니다.')
    user_input = input("Prompt: ")
    response = Economy(user_situation=user_input)
    print("response :\n {}".format(response))

elif user_choice == 5:
    print('사회을 선택하셨습니다.')
    user_input = input("Prompt: ")
    response = Society(user_situation=user_input)
    print("response :\n {}".format(response))
    
elif user_choice == 6:
    print('교통을 선택하셨습니다.')
    user_input = input("Prompt: ")
    response = Traffic(user_situation=user_input)
    print("response :\n {}".format(response))