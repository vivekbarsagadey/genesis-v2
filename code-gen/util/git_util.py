import os
from dotenv import load_dotenv
from git.repo.base import Repo
from util.file_util import FileUtil
load_dotenv()
token = os.environ["MOBILE_REPO_TOKEN"]
repo_path =  os.environ["MOBILE_REPO"]

MOBILE_GIT_LOCATION=f"https://{token}@github.com/{repo_path}"
def clone(project_config):
    location = os.path.join(project_config['path'], project_config['name'], project_config['app']['name'])
    FileUtil.clear_structure(location)
    Repo.clone_from(url=MOBILE_GIT_LOCATION,to_path=location , branch='main')    
    print(f"Code is downloaded to {location}")
    FileUtil.clear_structure( os.path.join(location,".git",".gitignore"))
