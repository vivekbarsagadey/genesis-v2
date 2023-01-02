import json
import os
from multiprocessing import Process
from util.file_util import FileUtil
from util.git_util import clone

CONFIG_FILE="./config/project.json"
CURRENT_PATH = os.getcwd()

def process_init_config_file():
    with open(CONFIG_FILE) as f:
        data = json.load(f)
        return data


def code_gen():
    print('----------------whiz-code-gen-----------------')
   

def project_config_gen():
    print("This is project Config Gen ")
    FileUtil.clear_src_structure()
    FileUtil.check_or_create_src_structure()
  

if __name__ == '__main__':
    print('==============================================')
    print('Please select values and press enter for performing operations:')   
    project_config_gen()
    process_init_config_file()
    clone()
    code_gen()
    
