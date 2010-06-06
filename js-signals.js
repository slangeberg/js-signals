function signal() 
{
	this.listeners = [];
	/**
	 * An optional array of classes defining the types of parameters sent to listeners.
	 */
	//function get valueClasses():Array;

	/** The current number of listeners for the signal. */
	this.numListeners = function()
	{
		return this.listeners.length;
	}

	/**
	 * Subscribes a listener for the signal.
	 * @param	listener A function with arguments
	 * that matches the value classes dispatched by the signal.
	 * If value classes are not specified (e.g. via Signal constructor), dispatch() can be called without arguments.
	 * @return the listener Function passed as the parameter
	 */
	this.add = function(listener) 
	{
		//console.log( "add()" );
		this.listeners.push( listener );
	}

	/**
	 * Subscribes a one-time listener for this signal.
	 * The signal will remove the listener automatically the first time it is called,
	 * after the dispatch to all listeners is complete.
	 * @param	listener A function with arguments
	 * that matches the value classes dispatched by the signal.
	 * If value classes are not specified (e.g. via Signal constructor), dispatch() can be called without arguments.
	 * @return the listener Function passed as the parameter
	 */
	//function addOnce(listener:Function):Function;

	/**
	 * Unsubscribes a listener from the signal.
	 * @param	listener
	 * @return the listener Function passed as the parameter
	 */
	//function remove(listener:Function):Function;
	
	this.dispatch = function() //...valueObjects):void
	{
		//console.log( "dispatch() - args: "+arguments + ", numListeners(): "+ this.numListeners() );
		
		if (!this.numListeners()) return;
		
		for (var listener in this.listeners) {
			if ( this.listeners[listener] ) { 	
				this.listeners[listener].apply( this, arguments );		
			}
		}
	}
}