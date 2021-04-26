
package examples.test.rule_3_10;

class B1 {
	
	private int a = 2;
	private int b = 2;
	private int c = 2;

	public String toString() {
		return +a+" "+b;
		
	}
	
	private String a(){
		return toString()+ this.toString();
	}



}
