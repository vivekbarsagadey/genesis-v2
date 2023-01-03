import os
from dotenv import load_dotenv
from git.repo.base import Repo
from util.file_util import FileUtil
load_dotenv()
token = os.environ["MOBILE_REPO_TOKEN"]

MOBILE_GIT_LOCATION=f"https://{token}@github.com/vivekbarsagadey/genesis-mobile.git"
def clone(project_config):
    config =project_config['config']
    location = os.path.join(config['path'], config['name'])
    FileUtil.clear_structure(location)
    Repo.clone_from(url=MOBILE_GIT_LOCATION,to_path=location , branch='dev')    
    print(f"Code is downloaded to {location}")
    FileUtil.clear_structure( os.path.join(location,".git",".gitignore"))
