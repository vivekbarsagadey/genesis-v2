import json
import os
from gen.nextjs.admin import build_builder
from gen.project import project_config_builder


from util.file_util import FileUtil

CONFIG_FILE="./config/project.json"
CURRENT_PATH = os.getcwd()
def processInitConfigFile():
    with open(CONFIG_FILE) as f:
        data = json.load(f)
        return data


def codeGen():
    print('----------------whiz-code-gen-----------------')

   

def projectCofigGen():
    print("This is projectCofigGen ")
    FileUtil.clear_src_structure()
    FileUtil.check_or_create_src_structure()
    project_config_builder.init()
    project_config_builder.upload_json()

if __name__ == '__main__':
    print('==============================================')
    print('Please select values and press enter for performing operations:')   
    projectCofigGen()
    codeGen()
    
