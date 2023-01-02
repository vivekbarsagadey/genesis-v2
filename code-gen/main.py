import json
import os

from util.file_util import FileUtil

CONFIG_FILE="./config/project.json"
CURRENT_PATH = os.getcwd()
def processInitConfigFile():
    with open(CONFIG_FILE) as f:
        data = json.load(f)
        return data


def codeGen():
    print('----------------whiz-code-gen-----------------')

   

def projectConfigGen():
    print("This is project Config Gen ")
    FileUtil.clear_src_structure()
    FileUtil.check_or_create_src_structure()
  

if __name__ == '__main__':
    print('==============================================')
    print('Please select values and press enter for performing operations:')   
    projectConfigGen()
    codeGen()
    
