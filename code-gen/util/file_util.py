import os
import shutil
import tempfile

class FileUtil:

    @staticmethod
    def clear_src_structure():
        if os.path.exists('./generated-sources'):
            shutil.rmtree('./generated-sources')

    @staticmethod
    def check_or_create_src_structure():
        if not os.path.exists('./generated-sources'):
            os.makedirs('./generated-sources')


    @staticmethod
    def create_folder(path):
        if not os.path.exists(path):
            os.makedirs(path)

    def move_files(self):
        print('Move files......')

    @staticmethod
    def module_writer(source,file_name, outputpath):
        FileUtil.create_folder(outputpath)
        with open(outputpath+'/'+file_name,'w+') as f:
            #print(source)
            f.write(source.replace("\n",""))
            f.close()


