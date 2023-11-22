import os
import bardapi
import config as cfg

# BARD API KEY
os.environ['_BARD_API_KEY'] = cfg.bard_config["api_key"]
''''''
#form = cfg.bard_config["format"]
human_content = cfg.bard_config["human"]
environment_content = cfg.bard_config["environment"]
labor_content = cfg.bard_config["labor"]
society_content = cfg.bard_config["society"]
economy_content = cfg.bard_config["economy"]
traffic_content = cfg.bard_config["traffic"]

basic_form = cfg.bard_config["format"]



def Human(user_situation):
    request = f"""The content included in the Human rights law is as follows:
                content : [{human_content}].               
                the specific situation: [{user_situation}]
                When you receive the specific situation, please let us know the specific and realistic legal matters based on the laws of the National Assembly in Korea from the perspective of Korean human rights law experts. 
                When you inform us of the legal matters, please fill out the basic form we provided. 
                form: [{basic_form}]
                The format provided includes relevant legal provisions, situation analysis, conclusions, answers, and additional considerations. Do not provide any answers other than this format.
                """
    
    response = bardapi.core.Bard().get_answer(request)

    return response['content']

def Environment(user_situation):
    request = f"""The content included in the Environment law is as follows:
                content : [{environment_content}].               
                the specific situation: [{user_situation}]
                When you receive the specific situation, please let us know the specific and realistic legal matters based on the laws of the National Assembly in Korea from the perspective of Korean environment law experts.
                When you inform us of the legal matters, please fill out the basic form we provided.
                form: [{basic_form}]
                The format provided includes relevant legal provisions, situation analysis, conclusions, answers, and additional considerations. Do not provide any answers other than this format.
                """
    
    response = bardapi.core.Bard().get_answer(request)

    return response['content']

def Labor(user_situation):
    request = f"""The content included in the Labor law is as follows:
                content : [{labor_content}].      
                the specific situation: [{user_situation}]         
                When you receive the specific situation, please let us know the specific and realistic legal matters based on the laws of the National Assembly in Korea from the perspective of Korean labor law experts.
                When you inform us of the legal matters, please fill out the basic form we provided.
                Please Please Do not provide answers at your discretion, but make sure to provide them according to the basic form you have received.
                form: [{basic_form}]
                The form provided includes relevant legal provisions, situation analysis, conclusions, answers, and additional considerations. Do not provide any answers other than this format.
                """
    
    response = bardapi.core.Bard().get_answer(request)

    return response['content']
#However, the content doesn't have to be the same, it just needs to be the same format.
def Economy(user_situation):
    request = f"""The content included in the Economy law is as follows:
                content : [{economy_content}].      
                the specific situation: [{user_situation}]
                When you receive the specific situation, please let us know the specific and realistic legal matters based on the laws of the National Assembly in Korea from the perspective of Korean economic law experts. 
                When you inform us of the legal matters, please fill out the basic form we provided.
                Please Please Do not provide answers at your discretion, but make sure to provide them according to the basic form you have received.
                form: [{basic_form}]
                The form provided includes relevant legal provisions, situation analysis, conclusions, answers, and additional considerations. Do not provide any answers other than this format.
                """
    
    response = bardapi.core.Bard().get_answer(request)

    return response['content']

def Society(user_situation):
    request = f"""The content included in the Society law is as follows:
                content : [{society_content}].   
                the specific situation: [{user_situation}]
                When you receive the specific situation, please let us know the specific and realistic legal matters based on the laws of the National Assembly in Korea from the perspective of Korean society law experts.
                When you inform us of the legal matters, please fill out the basic form we provided.
                Please Please Do not provide answers at your discretion, but make sure to provide them according to the basic form you have received.
                form: [{basic_form}]
                the specific situation: [{user_situation}]
                The form provided includes relevant legal provisions, situation analysis, conclusions, answers, and additional considerations. Do not provide any answers other than this format.
                """
    
    response = bardapi.core.Bard().get_answer(request)

    return response['content']

def Traffic(user_situation):
    request = f"""The content included in the Traffic law is as follows:
                content : [{traffic_content}].               
                the specific situation: [{user_situation}]
                When you receive the specific situation, please let us know the specific and realistic legal matters based on the laws of the National Assembly in Korea from the perspective of Korean traffic law experts.
                When you inform us of the legal matters, please fill out the basic form we provided.
                Please Please Do not provide answers at your discretion, but make sure to provide them according to the basic form you have received.
                form: [{basic_form}]
                The form provided includes relevant legal provisions, situation analysis, conclusions, answers, and additional considerations. Do not provide any answers other than this format.
                """
    
    response = bardapi.core.Bard().get_answer(request)

    return response['content']