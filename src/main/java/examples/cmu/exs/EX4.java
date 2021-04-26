package examples.cmu.exs;

public class EX4{

    private int a = 1;
    private String b = "b";
    private char c = 'c';

    public void throwException()
    {
        EX1 e = new EX1("EX1"+a, new Throwable());
        new EX2(e, "EX2"+b);
        new EX3("EX3"+c+4);
        new EX3("EX3"+10+c);
        new EX3(""+a+b+c);
        new EX6(new Throwable(),"EX6"+c);
        new EX3(""+(a+10));
    }

    public void tE()
    {
        new EX3("EX3"+c+40);
    }

}
