package examples.cmu.exs;

public abstract class EX5 extends Exception {

    String message;

    public EX5 (Throwable t, String m)
    {
        message = m;
    }

}
