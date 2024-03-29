import json
import os
from dotenv import load_dotenv
from multiprocessing import Process
from util.file_util import FileUtil
from util.git_util import clone


CONFIG_FILE="./config/project.json"
CURRENT_PATH = os.getcwd()

def process_init_config_file():
    with open(CONFIG_FILE) as f:
        project_config = json.load(f)
        return project_config


def code_gen(project_config):
    print('----------------whiz-code-gen-----------------')
   

def clean():
    print("This is project Config Gen ")
    FileUtil.clear_src_structure()
    FileUtil.check_or_create_src_structure()
  

if __name__ == '__main__':
    print('=============== START ===============================')
    load_dotenv()
    clean()
    project_config = process_init_config_file()
    clone(project_config)
    code_gen(project_config)
    
    print('================ END ==============================')
    
