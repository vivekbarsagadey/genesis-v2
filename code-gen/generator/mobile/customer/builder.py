from jinja2 import Environment, select_autoescape, FileSystemLoader
import os

file_loader = FileSystemLoader('template/project/mobile/insight')
env = Environment(loader=file_loader)

def build(project_config):
    #print("This is mobile customer", str(project_config))
    update_app_json(project_config)
    

def update_app_json(project_config):
    
    ''' create and replace app json'''
    template = env.get_template('app.json')
    output = template.render(name=project_config['app']['name'])
    location = os.path.join(project_config['path'], project_config['name'], project_config['app']['name'])
    print(output)
    with open(os.path.join(location,'app.json'), "w") as fh:
        fh.write(output)
    
def update_package_json(project_config):
    
    ''' create and replace app json'''
    template = env.get_template('app.json')
    output = template.render(name=project_config['app']['name'])
    location = os.path.join(project_config['path'], project_config['name'], project_config['app']['name'])
    print(output)
    with open(os.path.join(location,'app.json'), "w") as fh:
        fh.write(output)    