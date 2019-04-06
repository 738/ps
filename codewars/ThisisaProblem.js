function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {...this, name: this.firstName + ' ' + this.lastName};
}
