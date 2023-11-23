from bard import Human, Economy, Environment, Labor, Traffic, Society

print("""법률 카테고리를 선택하세요.
      1. 인권법
      2. 환경법
      3. 노동법
      4. 경제법
      5. 사회법
      6. 교통법
      7. 법률 안건 작성
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

elif user_choice == 7:
    print('법률 안건을 작성합니다.')
    input1 = input("날짜: ")
    input2 = input("사용자 정보: ")
    input3 = input("""
    법률 카테고리
    1. 인권법
    2. 환경법
    3. 노동법
    4. 경제법
    5. 사회법
    6. 교통법 
    """)
    input4 = input("안건 주제: ")
    input5 = input("안건의 내용: ")
    input6 = input("안건의 예상 효과: ")
    input7 = input("안건 제안 이유: ")
