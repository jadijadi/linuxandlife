// Importer
var EventEmitterGrouped = require('./').EventEmitterGrouped;

// Instantiate a new instance
var emitter = new EventEmitterGrouped();

// Bind an asynchronous event
emitter.on('hello', function(next){
	console.log('\tasync started');
	setTimeout(function(){
		console.log('\tasync finished');
		next();
	}, 1000);
});

// Bind a synchronous event
emitter.on('hello', function(){
	console.log('\tsync started and finished');
});

// Bind a prioritized event
vipListener = function(){
	console.log('\tvip started and finished');
};
vipListener.priority = 1;
emitter.on('hello', vipListener);

// Emit the events in serial (one after the other in a waiting fashion)
console.log('hello in serial started');
emitter.emitSerial('hello', function(err){
	console.log('hello in serial finished');

	// Emit the events in parallel (all at once)
	console.log('hello in parallel started');
	emitter.emitParallel('hello', function(err){
		console.log('hello in parallel finished');
	});
});

/* Outputs:
hello in serial started
	vip started and finished
	async started
	async finished
	sync started and finished
hello in serial finished
hello in parallel started
	vip started and finished
	async started
	sync started and finished
	async finished
hello in parallel finished
*/