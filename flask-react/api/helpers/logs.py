import sys
class logs():
    @staticmethod
    def printData(data):
        try:
            print("this is data: ",data,file=sys.stderr)
        except:
            print("error",file=sys.stderr)

    @staticmethod
    def printLocal(localStorage):
        print("this is storage ",localStorage,file=sys.stderr)

