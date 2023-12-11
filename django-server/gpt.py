import openai
import config as cfg
import chromadb

openai.api_key = cfg.gpt_config["api_key"]

client = chromadb.PersistentClient(path="chromadb")
    
collection1 = client.get_or_create_collection(
    name="law_table",
    metadata={"hnsw:space": "cosine"}
)

collection2 = client.get_or_create_collection(
    name="detail_law_table",
    metadata={"hnsw:space": "cosine"}
)

def recent_law_info(user_input, category):

    query_results_1 = collection1.query(
    query_texts=[user_input],
    n_results=5,
    where={"카테고리":category},
    where_document={"$contains": user_input}
    )
    
    query_results_2 = collection2.query(
    query_texts=[user_input],
    n_results=5,
    where={"카테고리":category},
    where_document={"$contains": user_input}
    )
    
    documents_list1 = [doc for sublist in query_results_1['documents'] for doc in sublist]
    documents_list2 = [doc for sublist in query_results_2['documents'] for doc in sublist]
    
    list1 = str(documents_list1)
    list2 = str(documents_list2)
   
    response = openai.ChatCompletion.create(
        model = "gpt-4",
        #model = "gpt-3.5-turbo",
        messages = [
            {"role": "system", "content": "국회에서 제안된 최신 안건을 저장하는 리스트 2개가 입력됐을 때, 해당 리스트의 요소들을 1,2,3 형식으로 깔끔하게 정리해줘. 그리고 만약 리스트가 둘다 비었면 ""최신 안건이 없습니다""를 출력해줘"},
            {"role": "user", "content": list1},
            {"role": "user", "content": list2}
        ]
    )

    return response.choices[0]['message']['content']
