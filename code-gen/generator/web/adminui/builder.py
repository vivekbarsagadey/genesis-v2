from jinja2 import Environment, select_autoescape, FileSystemLoader
import os
from util.string_util import StringUtil




def build(project_config):
    print("This is mobile customer", str(project_config))
    buildSchema(project_config)
    
    
def buildSchema(project_config):
    print("build Schema")
    file_loader = FileSystemLoader('template/project/web/adminui/prisma')
    env = Environment(loader=file_loader)
    template = env.get_template('schema.prisma')
    for page in project_config['pages']:
        output = template.render(page=page, StringUtil=StringUtil)
        print(output)
        ''' this out put needs to send in the schem file''' 
        location = os.path.join(project_config['path'], project_config['name'], 'admin-ui','prisma')
        with open(os.path.join(location,'schema.prisma'), "a") as fh:
            fh.write(output)    
        