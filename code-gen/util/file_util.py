import os
import shutil
import stat
import tempfile

def removeReadOnly(func, path, excinfo):
    # Using os.chmod with stat.S_IWRITE to allow write permissions
    os.chmod(path, stat.S_IWRITE)
    func(path)

class FileUtil:

    @staticmethod
    def clear_src_structure():
        if os.path.exists('./generated-sources'):
            shutil.rmtree('./generated-sources')
            
    @staticmethod
    def clear_structure(location):
        if os.path.exists(location):
            shutil.rmtree(location ,onerror=removeReadOnly)

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


