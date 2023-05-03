from jinja2 import Environment, select_autoescape, FileSystemLoader
import os
from util.string_util import StringUtil
from util.file_util import FileUtil



def build(project_config):
    print("This is mobile customer", str(project_config))
    #build_schema(project_config)
    build_api(project_config)
    services(project_config)
    
def build_schema(project_config):
    print("build Schema")
    file_loader = FileSystemLoader('template/project/web/adminui/prisma')
    env = Environment(loader=file_loader)
    template = env.get_template('schema.prisma')
    for page in project_config['pages']:
        output = template.render(page=page, StringUtil=StringUtil)
        #print(output)
        ''' this out put needs to send in the schem file''' 
        location = os.path.join(project_config['path'], project_config['name'], 'admin-ui','prisma')
        with open(os.path.join(location,'schema.prisma'), "a") as fh:
            fh.write(output)    



def build_api(project_config):  
    print("build API")    
    ''' You will have 2 files and folder inside pages/api'''  
    file_loader = FileSystemLoader('template/project/web/adminui/api')
    env = Environment(loader=file_loader)
    
    for page in project_config['pages']:
        for file_name in ['[id].ts','index.ts']:
            template = env.get_template(file_name)
            output = template.render(page=page, StringUtil=StringUtil)
            ''' this out put needs to send in the schem file''' 
            location = os.path.join(project_config['path'], project_config['name'], 'admin-ui','pages','api',page['name'])
            FileUtil.create_folder(location)
            with open(os.path.join(location,file_name), "w") as fh:
                fh.write(output)
                
def services(project_config):
    file_loader = FileSystemLoader('template/project/web/adminui/services')
    env = Environment(loader=file_loader)
    template = env.get_template('service.action.tsx')
    for service in project_config['pages']:
        output = template.render(service=service, StringUtil=StringUtil)
        print(output)
        ''' this out put needs to send in the schem file''' 
        location = os.path.join(project_config['path'], project_config['name'], 'admin-ui','services')
        with open(os.path.join(location,'service.action.tsx'), "w") as fh:
            fh.write(output)    
